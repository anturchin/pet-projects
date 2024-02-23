import { IOptions, TypeResp, IResponse, ICallback, TypeMethod, StatusCode } from '../../types';

class Loader {
    private baseLink: string;
    private options: Partial<IOptions>;

    constructor(baseLink: string, options: Partial<IOptions>) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp(
        { endpoint, options = {} }: TypeResp,
        callback = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    private async errorHandler(res: Response): Promise<IResponse> {
        if (!res.ok) {
            if (res.status === StatusCode.NotFound || res.status === StatusCode.Unauthorized)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        const data: Promise<IResponse> = await res.json();
        return data;
    }

    public makeUrl(options: Partial<IOptions>, endpoint: string): string {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    private async load(
        method: TypeMethod,
        endpoint: string,
        callback: ICallback,
        options: Partial<IOptions> = {}
    ): Promise<void> {
        try {
            const response = await fetch(this.makeUrl(options, endpoint), { method });
            const responseData = await this.errorHandler(response);
            callback(responseData);
        } catch (error) {
            console.error(error);
        }
    }
}

export default Loader;

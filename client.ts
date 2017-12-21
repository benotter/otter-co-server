export class OttClient 
{
    public api_url: string;

    public auth: OttAuth;
    public apps: OttApps;

    constructor (apiUrl: string)
    {
        this.api_url = apiUrl;

        this.auth = new OttAuth(this);
        this.apps = new OttApps(this);
    }
}

class OttAuth 
{
    constructor (public api: OttClient) 
    {}

    public login() {}
    public logout() {}
}

class OttApps 
{
    constructor (public api: OttClient)
    {}
}
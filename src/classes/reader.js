class Reader {
    static async load(page){
        const response = await fetch(`/data/pages/${page}.json`);
        const data = await response.json();
        return data;
    }
    static async modules() {
        const response = await fetch(`/data/modules/modules.json`);
        const data = await response.json();
        return data;
    }    
    static async system() {
        const response = await fetch(`/data/system.json`);
        const data = await response.json();
        return data;
    }
}

export default Reader;
import { parse } from 'yaml';

class Reader {
    static async load(page){
        const response = await fetch(`/data/pages/${page}.yaml`);
        const data = await response.text();

        const result = parse(data);
        return result.data;
    }
    static async modules() {
        const response = await fetch(`/data/modules/modules.yaml`);
        const data = await response.text();

        const result = parse(data);
        return result.data;
    }    
    static async system() {
        const response = await fetch(`/data/system.yaml`);
        const data = await response.text();

        const result = parse(data);
        return result.data;
    }
}

export default Reader;
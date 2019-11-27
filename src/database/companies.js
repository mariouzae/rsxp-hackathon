import { firebaseFireStore } from '../dependencies';
import { isObject } from 'util';

export const getAll = async () => {
    try {
        let companies = [];
        const company = await firebaseFireStore().collection('companies').get();
        
        company.forEach((querySnapshot) => {
            companies.push(
                formatData(querySnapshot)
            );
        });
                
        return companies;
    } catch (err) {
        throw err;
    }
}

export const findByName = async (name) => {
    try {
        if (name !== null) {
            let companies = [];
            const company = await firebaseFireStore().collection('companies')
                .where("name", "==", name)
                .limit(1)
                .get()

                company.forEach((querySnapshot) => {
                    companies.push(
                        formatData(querySnapshot)
                    );
                })
                
                return companies;
        }
    } catch (err) {
        throw err;
    }
}

const formatData = (obj) => {
    return {
        id: obj.id,
        data: obj.data()
    }
}
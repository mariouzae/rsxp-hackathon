import { firebaseFireStore } from '../dependencies';

export const getAll = () => {
    try {
        let schoolList = [];
        firebaseFireStore().collection('schools')
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach(function (doc) {
                schoolList.push({
                    id: doc.id,
                    data: doc.data()
                });
            });
        }); 

        return schoolList;
    } catch (err) {
        throw err;
    }
}

export const addSchool = (school) => {
    try {
        if (school) {
            firebaseFireStore().collection('schools')
                .add(school)
                .then((docRef) => {
                    return docRef.id;
                })
                .catch(() => {});
        }

    } catch (err) {
        throw err;
    }
}

export const findAll = () => {
    try {
        let schools = [];
        firebaseFireStore().collection('schools')
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    schools.push({
                        id: doc.id,
                        data: doc.data()
                    });
                });

                return schools;
            })
            .catch(() => {});
    } catch (err) {
        throw err;
    }
}

export const findByName = async (name) => {
    try {
        if (name !== null) {
            let schools = [];
            const school = await firebaseFireStore().collection('name')
                .where("name", "==", name)
                .limit(1)
                .get()

                school.forEach((querySnapshot) => {
                    schools.push({
                        id: querySnapshot.id,
                        data: querySnapshot.data()
                    });
                })
                
                return schools;
        }
    } catch (err) {
        throw err;
    }
}

export const findByEmail = async (email) => {
    try {
        if (email !== null) {
            let schools = [];
            const school = await firebaseFireStore().collection('schools')
                .where("email", "==", email)
                .limit(1)
                .get()

                school.forEach((querySnapshot) => {
                    schools.push({
                            id: querySnapshot.id,
                            data: querySnapshot.data()
                    });
                });
                
                return schools;
        }
    } catch (err) {
        throw err;
    }
}

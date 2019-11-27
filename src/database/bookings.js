import { firebaseFireStore } from '../dependencies';

export const addBooking = async (companyId, schoolId) => {
    try {
        const data = {
            companyId,
            schoolId,
            createdAt: new Date(),
            date: new Date()
        }

        firebaseFireStore().collection('bookings')
            .add(data)
            .then((refDoc) => {
                console.log("Refdoc: ", refDoc.id);
                return refDoc.id;
            })
            .catch(() => {})
    } catch (err) {
        throw err;
    }
}

export const findBookingBySchool = async (schoolId) => {
    try {
        const bookings = [];
        if (schoolId !== null) {
        firebaseFireStore().collection('bookings')
            .where("schoolId", "==", schoolId)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    bookings.push(
                        formatData(doc.data())
                    );
                });

                return bookings;
            })
            .catch(() => {})
        }
    } catch (err) {
        throw err;
    }
}

export const findBookingByCompany = async (companyId) => {
    try {
        const bookings = [];
        if (companyId !== null) {
        firebaseFireStore().collection('bookings')
            .where("companyId", "==", companyId)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    bookings.push(
                        formatData(doc.data())
                    )
                });

                return bookings;
            })
            .catch(() => {})
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


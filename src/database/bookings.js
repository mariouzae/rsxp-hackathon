import { firebaseFireStore } from '../dependencies';

export const addBooking = async (companyId, schoolId, date) => {
    try {
        const data = {
            companyId,
            schoolId,
            createdAt: new Date(),
            date
        }

        firebaseFireStore().collection('bookings')
            .add(data)
            .then((refDoc) => {
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


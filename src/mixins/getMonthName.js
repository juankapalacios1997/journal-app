const getMonthName = {
    methods: {
        getMonthName(month) {
            let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
            return months[month]
        }
    }
}

export default getMonthName
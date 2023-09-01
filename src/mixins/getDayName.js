const getDayName = {
    methods: {
        getDayName(day) {
            let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
            if(!day) return
            return days[day]
        }
    }
}

export default getDayName
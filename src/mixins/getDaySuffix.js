const getDaySuffix =  {
    methods: {
        getDaySuffix(day) {
            let suffix
            if (day % 10 === 1) {
                suffix = 'st'
                console.log(typeof day)
            } else if (day % 10 === 2) {
                suffix = 'nd'
            } else if (day % 10 === 3) {
                suffix = 'rd'
            } else {
                suffix = 'th'
            }
            return suffix
        }
    }
}

export default getDaySuffix
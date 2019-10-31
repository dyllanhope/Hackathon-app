module.exports = (pool) => {
    const beggarData = {
        location: "",
        count: 0,
        reporter: "",
        help: false,
        info: ""
    }

    const locationAdder = (location) => {
        beggarData.location = location
    }

    const countAdder = (count) => {
        beggarData.count = count
    }

    const reporterAdder = (reporter) => {
        beggarData.reporter = reporter
    }

    const helpAdder = (help) => {
        beggarData.help = help
    }

    const infoAdder = (info) => {
        beggarData.info = info
    }

    const dataReturner = () => {
        return beggarData
    }

return {
    locationAdder,
    countAdder,
    reporterAdder,
    helpAdder,
    infoAdder,
    dataReturner
}

}
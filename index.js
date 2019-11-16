const merge = require('lodash.merge')

exports.jsonMerger = (req, res) => {
    const { object1: rawObject1, object2: rawObject2 } = req.body

    if (typeof rawObject1 === 'string' && typeof rawObject2 === 'string') {
        try {
            const o1 = JSON.parse(rawObject1)
            const o2 = JSON.parse(rawObject2)

            res.send(merge(o1, o2))
        } catch(err) {
            res.send(err)
        }
    }
}

import { Request, Response } from 'express';
import merge from 'lodash.merge';

exports.jsonMerger = (req: Request, res: Response) => {
    // CORS
    res.set('Access-Control-Allow-Origin', '*');
    if (req.method === 'OPTIONS') {
        res.set('Access-Control-Allow-Methods', 'GET, POST');
        res.set('Access-Control-Allow-Headers', 'Content-Type');
        res.set('Access-Control-Max-Age', '3600');
        res.status(204).send();
    };

    const { object1: rawObject1, object2: rawObject2 } = req.body;

    if (typeof rawObject1 === 'string' && typeof rawObject2 === 'string') {
        try {
            const o1 = JSON.parse(rawObject1);
            const o2 = JSON.parse(rawObject2);

            res.send(merge(o1, o2));
        } catch(err) {
            res.send(err);
        }
    }

    res.status(400).end();
}

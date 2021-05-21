import fastJsonStringify from 'fast-json-stringify';
import turboJsonParse from 'turbo-json-parse';
import { BasePreare } from '../base/index.js';
import getAllSchema from '../schema/json-schema/get-all.json';
import getOneSchema from '../schema/json-schema/get-one.json';
import healthSchema from '../schema/json-schema/health.json';

const getAllHandler = new BasePreare(getAllSchema);
getAllHandler.setSerializer(fastJsonStringify);
getAllHandler.setDeserializer(turboJsonParse);

const getOneHandler = new BasePreare(getOneSchema);
getOneHandler.setSerializer(fastJsonStringify);
getOneHandler.setDeserializer(turboJsonParse);

const healthHandler = new BasePreare(healthSchema);
healthHandler.setSerializer(fastJsonStringify);
healthHandler.setDeserializer(turboJsonParse);

export { getAllHandler, getOneHandler, healthHandler };
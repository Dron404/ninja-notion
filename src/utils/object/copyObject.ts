const copyObject = <T>(data: T): T => JSON.parse(JSON.stringify(data));
export default copyObject;

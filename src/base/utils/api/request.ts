import mockJson from "./mock.json";

const request = () => {
    return new Promise((resolve, reject) => {
        resolve(mockJson);
    });
};

const getMockInfo = async () => {
    const result = (await request()) as { success: boolean; result: {} };

    if (result.success) {
        window.$message.success("Successfully request");
    } else {
        window.$message.error("Failed request");
    }
};
export { request, getMockInfo };

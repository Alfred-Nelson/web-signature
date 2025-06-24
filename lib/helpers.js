"use client"

const helpers = {

    /**
     * 
     * @param {number} ms
     * @returns 
     */
    async sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

export default helpers
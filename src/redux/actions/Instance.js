export const INSTANCE_ADD = "INSTANCE_ADD";
export const INSTANCE_GET = "INSTANCE_GET";
export const INSTANCE_DELETE = "INSTANCE_DELETE";
export const INSTANCE_GET_CONFIG = "INSTANCE_GET_CONFIG";
export const INSTANCE_SET_CONFIG = "INSTANCE_SET_CONFIG";

export function addInstance() {
    return {
        type: INSTANCE_ADD
    }
}

export function getInstance(instance) {
    return {
        type: INSTANCE_GET,
        instance
    }
}

export function deleteInstance(instance) {
    return {
        type: INSTANCE_DELETE,
        instance
    }
}

export function getConfig(config) {
    return {
        type: INSTANCE_GET_CONFIG,
        config
    }
}

export function setConfig(config) {
    return {
        type: INSTANCE_SET_CONFIG,
        config
    }
}
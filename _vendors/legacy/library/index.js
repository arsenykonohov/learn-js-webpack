function Legacy(arg) {
    let name = "legacy-module.";
    return {
        arg: arg,
        config: globalLegacySettings,
        name: name
    };
}
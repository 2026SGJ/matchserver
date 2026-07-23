const login = async (uuid, pass) => {
    // const response = await fetch('https://sso.ccw.site/web/auth/login-by-password', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36'
    //     },
    //     body: JSON.stringify({"loginKey":uuid,"clientCode":"STUDY_COMMUNITY","password":pass,"extra":"{\"device\":\"Windows 10\",\"browser\":\"Chrome 146\",\"scene\":null}"})
    // });
    // if (!response.ok) {
    //     throw new Error(`Login failed: ${response.statusText}`);
    // }
    // const token = (await response.json()).body.token;
    // const token = 'YV4O4Scs4bkNjMJj68d54e6f86bbc77f84e2f8d6';
    // const resp2 = await fetch('https://community-web.ccw.site/students/profile', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         studentNumber: uuid,
    //     }),
    //     headers: {
    //         'Content-Type': 'application/json',
    //     }
    // })
    // if (!resp2.ok) {
    //     throw new Error(`Failed to fetch profile: ${resp2.statusText}`);
    // }
    // const profile = await resp2.json();
    // const oid = profile.body.studentOid;
    // console.log(`token=${token}; cookie-user-id=${oid}`);
    // return `token=${token}; cookie-user-id=${oid}`;
    return 'token=5eBkRsyYvMj6r65N68d54e6f86bbc77f84e2f8d6; cookie-user-id=68d54e6f86bbc77f84e2f8d6';
}

export { login };
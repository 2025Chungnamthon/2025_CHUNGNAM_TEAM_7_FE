export type LoginParams = {
    email: string;
    password: string;
};

export type LoginResult = {
    success: boolean;
    token?: string;
    message?: string;
};

export async function login({ email, password }: LoginParams): Promise<LoginResult> {
    if (email === 'test@test.com' && password === 'test') {
        return { success: true, token: 'dummy-token-abc123' };
    }

    return { success: false, message: '이메일 또는 비밀번호가 올바르지 않습니다.' };
}

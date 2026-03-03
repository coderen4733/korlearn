export const MESSAGES = {
  AUTH: {
    JWT: {
      NO_TOKEN: "AccessToken이 없습니다.",
      NOT_SUPPORTED: "지원하지 않는 형식의 인증정보입니다.",
      EXPIRED: "유효기간이 지난 인증정보입니다.",
      INVALID: "유효하지 않은 인증정보입니다.",
      NO_USER: "존재하지 않는 사용자입니다.",
      DISCARDED_TOKEN: "폐기된 인증정보입니다."
    },
    SIGN_UP: {
      SUCCEED: "회원 가입에 성공했습니다.",
      FAIL: {
        EMAIL: {
          NO_EMAIL: "이메일을 입력해 주세요.",
          INVALID_FORMAT: "이메일 형식이 올바르지 않습니다.",
          DUPLICATED: "이미 가입된 이메일입니다.",
        },
        PASSWORD: {
          NO_PASSWORD: "비밀번호를 입력해 주세요.",
          NO_PASSWORD_CONFIRM: "비밀번호 확인을 입력해 주세요.",
          NOT_MATCHED: "두 비밀번호가 일치하지 않습니다.",
          MIN_LENGTH: "비밀번호는 최소 4자리 이상입니다.",
        },
        NICKNAME: {
          NO_NICKNAME: "닉네임을 입력해 주세요.",
        }
      }
    },
    LOG_IN: {
      SUCCEED: "로그인에 성공했습니다.",
      FAIL: {
        EMAIL: {
          NO_EMAIL: "이메일을 입력해 주세요.",
          INVALID_FORMAT: "이메일 형식이 올바르지 않습니다.",
        },
        PASSWORD: {
          NO_PASSWORD: "비밀번호를 입력해 주세요.",
          NOT_MATCHED: "비밀번호가 일치하지 않습니다.",
        }
      }
    },
    LOG_OUT: {
      SUCCEED: "로그아웃에 성공했습니다.",
    },
    RE_TOKEN: {
      SUCCEED: "토큰 재발급에 성공했습니다.",
    }
  },
  USER: {
    READ: {
      ME: {
        SUCCEED: "내 정보 조회에 성공했습니다.",
      }
    }
  }
};
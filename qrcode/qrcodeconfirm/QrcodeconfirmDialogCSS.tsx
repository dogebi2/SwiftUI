import { Black, GreyDark } from '@sl-portal-mf/sl-portal-kaleid-theme';
import { Danger } from '@sl-portal-mf/sl-portal-kaleid-theme';

export const applyStep7DialogStyles = {
  root: {
    '& .MuiListItem-root': {
      display: 'flex',
      padding: '0px',
      paddingBottom: '8px',
      '& .MuiTypography-root': {
        color: GreyDark['00']
      }
    },
    '& .MuiOutlinedInput-root': {
      color: Black['00']
    },
    '& .MuiInputBase-multiline': {
      padding: '0px'
    },

    confirmInfoInput: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      marginRight: '16px',
      '& .MuiTextField-root': {
        margin: '0px'
      },
      '& .MuiInputBase-inputMultiline': {
        padding: '4px 8px'
      }
    },
    confirmInfoBox: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '32px'
    },
    confirmInfolabel: {
      width: '120px',
      marginRight: '16px',
      alignSelf: 'stretch',
      paddingTop: '8px'
    },
    confirmInfoAlert: {
      margin: '4px 0px 1px 0px'
    },
    confirmInfoInputArea: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px',
      '& .MuiOutlinedInput-root': {
        width: '160px',
        height: '32px',
        fontSize: '14px',
        paddingLeft: '7px',
        '& .MuiOutlinedInput-input': {
          padding: '0px'
        }
      },
      '& .MuiTypography-root': {
        color: GreyDark['00']
      }
    },
    confirmInfoInputAreaCheck: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px',
      '& .MuiOutlinedInput-root': {
        width: '160px',
        height: '32px',
        fontSize: '14px',
        paddingLeft: '7px',
        '& .MuiOutlinedInput-input': {
          padding: '0px'
        },
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: Danger['00']
        }
      },
      '& .MuiTypography-root': {
        color: GreyDark['00']
      }
    },
    confirmNameNameLabel: {
      display: 'flex',
      alignItems: 'center'
    },
    nameBox: {
      display: 'flex'
    },

    confirmAddressInput: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      marginRight: '16px',
      '& .MuiTextField-root': {
        margin: '0px'
      },
      '& .MuiInputBase-inputMultiline': {
        padding: '4px 8px'
      }
    }
  }
};

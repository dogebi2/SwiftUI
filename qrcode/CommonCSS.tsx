import { GreyDark } from '@sl-portal-mf/sl-portal-kaleid-theme';

export const applyContentStyles = {
  width: '832px',
  padding: '0 16px',
  margin: '0 auto',
  overflow: 'hidden',
  '& .PageTitle-root': {
    margin: '32px 0 35px 0'
  },
  subTitle: {
    marginBottom: '16px'
  },
  secondaryTitle: {
    margin: '48px 0 32px 0'
  },
  tableTitle: {
    margin: '32px auto'
  },
  alertBox: {
    marginTop: '16px'
  },
  searchBox: {
    margin: '16px 0',
    '& .MuiOutlinedInput-root': {
      width: 480,
      height: 32,
      borderRadius: '0px',
      '& .MuiOutlinedInput-input': {
        padding: 0,
        fontSize: '14px'
      }
    }
  },
  resultBox: {
    border: `solid 1px ${GreyDark.T2}`,
    borderRadius: '8px',
    width: '800px',
    margin: '0 auto 32px auto'
  },
  buttonBox: {
    margin: '0 auto',
    padding: '32px 16px 32px 16px',
    width: '832px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  definitionListFirstColWidth: {
    '& .MuiTableRow-root td.MuiTableCell-root:first-of-type': {
      verticalAlign: 'top',
      width: '204px'
    }
  },
  qacodeconfirmDisplayflex: {
    width: 'auto',
    padding: '0 16px',
    margin: '0 auto',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'space-around'
  }
};

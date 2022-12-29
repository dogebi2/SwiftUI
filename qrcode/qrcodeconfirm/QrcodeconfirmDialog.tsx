import { useRef, useState } from 'react';
import React from 'react';

import { Button, Popover, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Dialog } from '@sl-portal-mf/sl-portal-common-components';

// import { useRouter } from 'next/router';
// import { Router } from '~/routers';
import { isNil } from 'lodash';

import { QrcodeconfirmContent } from './QrcodeconfirmContent';

import { ApplyDataType } from '~/components/pages/lines/apply/context';

export type DialogProps = {
  applyData: ApplyDataType;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
};
export const QrcodeconfirmDialog = (props: DialogProps) => {
  const { applyData, setOpen, open } = props;
  // const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const refDialogOkBtn = useRef<HTMLButtonElement>(null);
  const [dialogSubmitFlg, setDialogSubmitFlg] = useState(false);

  const openDialog = !isNil(anchorEl);

  const closeBtnOnClickHandler = () => {
    setAnchorEl(null);
  };
  // const okBtnOnClickHandler = () => {
  //   setDialogSubmitFlg(false);
  // };
  const cancelBtnOnClickHandler = () => {
    setOpen(false);
    setDialogSubmitFlg(false);
  };
  const dialogContentProps = {
    // setErrorMessage: setErrorMessage,
    setDialogSubmitFlg: setDialogSubmitFlg,
    setAnchorEl: setAnchorEl,
    setOpen: setOpen,
    dialogSubmitFlg: dialogSubmitFlg,
    refDialogOkBtn: refDialogOkBtn,
    applyData: applyData
  };
  // const backPreviousPage = (href: string) => {
  //   router.push({
  //     pathname: href,
  //     query: { applyDataId: '' }
  //   });
  // };
  const dialogProps = {
    title: '本人確認手続き',
    content: <QrcodeconfirmContent {...dialogContentProps} />,
    mainButton: (
      <Button
        ref={refDialogOkBtn}
        id="button-ok"
        variant="contained"
        size="small"
        onClick={cancelBtnOnClickHandler}
        // onClick={() => {
        //   setOpen(false);
        //   backPreviousPage(Router.Orders.INDEX.href);
        // }}
      >
        閉じる
      </Button>
    ),
    open: open
  };
  return (
    <Box>
      <Dialog {...dialogProps}></Dialog>
      <Popover
        id="confirm-Popover"
        open={openDialog}
        anchorEl={anchorEl}
        onClose={closeBtnOnClickHandler}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
      >
        <Box
          display="flex"
          justifyContent="flex-end"
          sx={{
            width: 320,
            height: 108,
            flexDirection: 'column'
          }}
        >
          <Typography
            className="txD"
            component="span"
            variant="body2"
            display="block"
            sx={{
              padding: '16px 16px 0 16px'
            }}
          >
            {/* {errorMessage} */}
          </Typography>
          <Box sx={{ padding: '16px 16px 16px 240px' }}>
            <Button
              variant="contained"
              size="small"
              onClick={closeBtnOnClickHandler}
            >
              閉じる
            </Button>
          </Box>
        </Box>
      </Popover>
    </Box>
  );
};

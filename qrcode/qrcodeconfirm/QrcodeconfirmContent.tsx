import { useEffect, useState } from 'react';
import React from 'react';

// import { gql, useLazyQuery } from '@apollo/client';
import { Link, Table, TableBody, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Alert } from '@sl-portal-mf/sl-portal-common-components';

import NextLink from 'next/link';

import QRCode from 'qrcode';

import { applyContentStyles } from '../../CommonCSS';
import { applyStep7DialogStyles } from './QrcodeconfirmDialogCSS';
// import { ApplyDataType } from '~/components/pages/lines/apply/context';
// import { eKycApplications } from '~/graphql/queries';
// import {
//   GetEkycApplicationQuery,
//   GetEkycApplicationQueryVariables
// } from '~/graphql/types';
export const QrcodeconfirmContent = () => {
  const baseUrl = 'https://ekyc.showcase-tv.com';
  const [geturl, setGeturl] = useState(baseUrl);
  const [qrVer10, setQrVer10] = useState('');

  //TODO eKycApplications
  // const [queryekycApplications] = useLazyQuery<
  //   GetEkycApplicationQuery,
  //   GetEkycApplicationQueryVariables
  // >(
  //   gql(eKycApplications)
  //   , {
  //       onCompleted: () => {
  //         queryEKycReApplications({
  //           variables: {
  //             applicationUrl: ''
  //           }
  //         });
  //       }
  //     }
  // );
  useEffect(() => {
    // URLを取得してQRコードを生成
    QRCode.toDataURL(
      geturl,
      { version: 10, errorCorrectionLevel: 'high', width: 168 },
      function (err, url) {
        setQrVer10(url);
        console.log(err);
      }
    );
  }, [geturl]);
  return (
    <Box>
      <Box sx={applyStep7DialogStyles.root}>
        <Box sx={applyContentStyles.subTitle}>
          <Typography
            variant="body1"
            className="txD"
            id="typography-confirmInfo"
          >
            下記のURL、QRコードから確認ページに移動して、本人確認手続きを行ってください。
          </Typography>
        </Box>
        <Box sx={applyContentStyles.alertBox}>
          <Alert
            title="ユーザーIDとして登録されているメールアドレス宛てに手続き案内メールを送信しました。"
            messageComponent="div"
            type="safe"
            id="alert-QRcode"
            message
          ></Alert>
        </Box>
        <Box sx={applyContentStyles.alertBox}>
          <Alert
            id="QRcode-alert-warning"
            message={
              <Box component="ul" sx={{ margin: '0px', paddingLeft: '24px' }}>
                <Box
                  component="li"
                  sx={{ marginBottom: '6px' }}
                  id="QRcode-alert-warning-li-1"
                >
                  本人確認の有効期限は、担当者情報の入力時から8日間です。
                </Box>
                <Box component="li" id="QRcode-alert-warning-li-2">
                  有効期限を過ぎると、再度、申込手続きを行う必要があります。
                </Box>
                <Box component="li" id="QRcode-alert-warning-li-2">
                  本画面を閉じると再表示出来ません。手続き案内メールをご確認ください。
                </Box>
              </Box>
            }
            closeButton={false}
            type={'warning'}
          ></Alert>
        </Box>
        <Box sx={applyContentStyles.qacodeconfirmDisplayflex}>
          <Typography
            variant="body1"
            className=""
            sx={{
              padding: '20px 0px',
              fontWeight: '700'
            }}
            id="qrcode-footer-message"
          >
            確認ページ（外部サイト : LIQUID eKYC）
          </Typography>
          <Box sx={{ p: '0 10px' }}>
            <Table>
              <TableBody>
                <TableRow>
                  <img src={qrVer10} alt="QR error"></img>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
          <NextLink href={geturl} passHref>
            <Link underline="none" target="_blank">
              {geturl}
            </Link>
          </NextLink>
        </Box>
      </Box>
    </Box>
  );
};

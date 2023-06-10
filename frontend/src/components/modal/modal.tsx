import React, { useState } from 'react';
import { Drawer } from 'antd';

interface IProps {
  title?: string;
  show: boolean;
  maskClosable?: boolean;
  width?: number | string;
  possition?: "left" | "right";
  children: React.ReactNode;
  headerChildren?: React.ReactNode;
  onDimiss?: () => void;
}
const ApModal: React.FC<IProps> = ({
  title,
  show,
  children,
  maskClosable,
  headerChildren,
  width,
  onDimiss,
}) => {


  return (
    <Drawer title={title}
      width={width || 720}
      onClose={onDimiss}
      open={show}
      bodyStyle={{ paddingBottom: 80 }}
      extra={headerChildren}
      maskClosable={maskClosable || false}>
      {children}
    </Drawer>
  );
};

export default ApModal;
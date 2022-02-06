import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel, { stepLabelClasses } from "@mui/material/StepLabel";
import PaymentIcon from "@mui/icons-material/Payment";
import MicrowaveIcon from "@mui/icons-material/Microwave";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

import styles from "../../styles/Order.module.css";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <PaymentIcon />,
    2: <MicrowaveIcon />,
    3: <DeliveryDiningIcon />,
    4: <FactCheckIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const ColorlibStepLabel = styled(StepLabel)(() => ({
  [`& .${stepLabelClasses.label}`]: {
    [`&.${stepLabelClasses.completed}`]: {
      color: "rgba(255, 255, 255, 1)",
    },
    [`&.${stepLabelClasses.active}`]: {
      color: "rgba(255, 255, 255, 1)",
    },
    color: "rgba(255, 255, 255, 0.3)",
  },
}));

const steps = ["Payment", "Preparing", "out for delivery", "Delivered"];

export default function Order() {
  return (
    <div className={styles.parent}>
      <div className={styles.order}>
        <div className={styles.orderInfo}>
          <h4>Order No.</h4>
          <p>123412</p>
        </div>
        <div className={styles.orderInfo}>
          <h4>Customer</h4>
          <p>Mark Robber</p>
        </div>
        <div className={styles.orderInfo}>
          <h4>Location</h4>
          <p>123 park st. New York</p>
        </div>
        <div className={styles.orderInfo}>
          <h4>Total</h4>
          <p>$29.98</p>
        </div>
      </div>
      <Stepper
        alternativeLabel
        activeStep={2}
        connector={<ColorlibConnector />}
        className={styles.stepper}
      >
        {steps.map((label) => (
          <Step key={label}>
            <ColorlibStepLabel StepIconComponent={ColorlibStepIcon}>
              {label}
            </ColorlibStepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}

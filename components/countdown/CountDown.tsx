// app/components/Countdown.tsx
'use client';

import React from 'react';

type CountdownProps = {
  date: string; // ISO format (ej: '2025-06-01T00:00:00')
};

export default class Countdown extends React.Component<CountdownProps> {
  interval: NodeJS.Timeout | null = null;
  state = {
    timeLeft: '',
  };

  componentDidMount() {
    this.calculateTimeLeft();
    this.interval = setInterval(this.calculateTimeLeft, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  calculateTimeLeft = () => {
    const now = new Date().getTime();
    const target = new Date(this.props.date).getTime();
    const difference = target - now;

    if (difference <= 0) {
      this.setState({ timeLeft: '¡El evento ha comenzado!' });
      if (this.interval) clearInterval(this.interval);
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    this.setState({
      timeLeft: `${days}d ${hours}h ${minutes}m ${seconds}s`,
    });
  };

  render() {
    return <span className='text-4xl timeSet'>{this.state.timeLeft}</span>;
  }
}

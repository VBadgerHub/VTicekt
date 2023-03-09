export interface IMail  {
    from: string,
    to: string,
    subject: string,
    text: string,
};

export interface IDeliveryInfo {
    info?: string | null;
    error?: string | null;
}
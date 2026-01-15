import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DeviceFragmentation = () => {
  const markdownFilePath = 'Mobile/Platforms/Basics/AndroidFundamentals/DeviceFragmentation';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Device Fragmentation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DeviceFragmentation;

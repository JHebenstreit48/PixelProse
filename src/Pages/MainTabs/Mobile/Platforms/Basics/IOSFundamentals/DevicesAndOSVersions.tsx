import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DevicesAndOSVersions = () => {
  const markdownFilePath = 'Mobile/Platforms/Basics/IOSFundamentals/DevicesAndOSVersions';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Devices & OS Versions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DevicesAndOSVersions;

import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DevicesAndOSVersions = () => {
  const markdownFilePath = 'Mobile/Platforms/Basics/IOSFundamentals/DevicesAndOSVersions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Devices & OS Versions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DevicesAndOSVersions;

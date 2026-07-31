import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BuildTargetsAndArchitectures = () => {
  const markdownFilePath = 'Mobile/Platforms/Basics/IOSFundamentals/BuildTargetsAndArchitectures';

  return (
    <>
      <PageLayout>
        <PageTitle title="Build Targets & Architectures" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BuildTargetsAndArchitectures;

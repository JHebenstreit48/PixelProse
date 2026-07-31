import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const InstallAndSetup = () => {
  const markdownFilePath = 'Engines/Unity/Testing/Basics/InstallAndSetup';

  return (
    <>
      <PageLayout>
        <PageTitle title="Install & Setup" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InstallAndSetup;

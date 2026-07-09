import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IntelliJSetup = () => {
  const markdownFilePath = 'Languages/Kotlin/Tools/IDEAndLint/IntelliJSetup';

  return (
    <>
      <PageLayout>
        <PageTitle title="IntelliJ Setup" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IntelliJSetup;

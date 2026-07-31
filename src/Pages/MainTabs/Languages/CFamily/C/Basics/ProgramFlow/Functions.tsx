import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const Functions = () => {
  const markdownFilePath = 'Languages/CFamily/C/Basics/ProgramFlow/Functions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Functions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Functions;

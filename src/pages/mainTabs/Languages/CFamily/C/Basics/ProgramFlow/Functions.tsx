import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

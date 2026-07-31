import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const Lunatest = () => {
  const markdownFilePath = 'Languages/Lua/Testing/Frameworks/Lunatest';

  return (
    <>
      <PageLayout>
        <PageTitle title="Lunatest" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Lunatest;

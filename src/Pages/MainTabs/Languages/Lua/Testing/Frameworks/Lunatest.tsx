import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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

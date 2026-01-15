import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Lunatest = () => {
  const markdownFilePath = 'Languages/Lua/Testing/Frameworks/Lunatest';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Lunatest" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Lunatest;

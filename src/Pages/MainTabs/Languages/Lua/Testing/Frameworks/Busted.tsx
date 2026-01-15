import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Busted = () => {
  const markdownFilePath = 'Languages/Lua/Testing/Frameworks/Busted';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Busted" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Busted;

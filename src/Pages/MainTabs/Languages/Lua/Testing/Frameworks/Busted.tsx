import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Busted = () => {
  const markdownFilePath = 'Languages/Lua/Testing/Frameworks/Busted';

  return (
    <>
      <PageLayout>
        <PageTitle title="Busted" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Busted;

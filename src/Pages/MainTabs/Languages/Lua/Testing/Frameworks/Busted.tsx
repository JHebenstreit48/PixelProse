import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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

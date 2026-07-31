import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const PopularLibraries = () => {
  const markdownFilePath = 'Languages/Lua/Tools/Libraries/PopularLibraries';

  return (
    <>
      <PageLayout>
        <PageTitle title="Popular Libraries" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PopularLibraries;

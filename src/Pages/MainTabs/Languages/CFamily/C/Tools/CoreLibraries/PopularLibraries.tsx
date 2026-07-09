import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PopularLibraries = () => {
  const markdownFilePath = 'Languages/CFamily/C/Tools/CoreLibraries/PopularLibraries';

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

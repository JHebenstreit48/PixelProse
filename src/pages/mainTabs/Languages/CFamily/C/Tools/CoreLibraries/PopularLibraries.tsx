import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

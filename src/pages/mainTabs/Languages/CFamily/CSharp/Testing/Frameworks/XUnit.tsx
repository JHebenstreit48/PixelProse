import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const XUnit = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Testing/Frameworks/XUnit';

  return (
    <>
      <PageLayout>
        <PageTitle title="xUnit" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default XUnit;

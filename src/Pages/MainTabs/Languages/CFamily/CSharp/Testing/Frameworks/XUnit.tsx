import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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

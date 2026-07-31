import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const MyGet = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Tools/Packages/MyGet';

  return (
    <PageLayout>
      <PageTitle title="C# Tools - MyGet" />
      <Notes filePath={markdownFilePath} />
    </PageLayout>
  );
};

export default MyGet;
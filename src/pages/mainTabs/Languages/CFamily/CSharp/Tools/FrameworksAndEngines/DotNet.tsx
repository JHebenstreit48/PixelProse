import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DotNet = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Tools/Frameworks/DotNetFramework';

  return (
    <PageLayout>
      <PageTitle title="C# Tools - .NET" />
      <Notes filePath={markdownFilePath} />
    </PageLayout>
  );
};

export default DotNet;
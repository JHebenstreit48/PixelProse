import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ProtocolsAndExtensions = () => {
  const markdownFilePath = 'Languages/Swift/Advanced/GenericsAndProtocols/ProtocolsAndExtensions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Protocols & Extensions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProtocolsAndExtensions;
